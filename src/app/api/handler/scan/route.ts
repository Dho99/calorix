import { NextRequest, NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";
import axios from "axios";
import { toSentenceCase } from "js-convert-case";

export async function POST(request: NextRequest) {
  const data = await request.formData();

  const file = data.get("file") as File;
  const client = new InferenceClient(process.env.HUGGINGFACE_API_KEY as string);

  const output = await client.imageClassification({
    inputs: file,
    model: "nateraw/food",
    provider: "auto",
  });

  const result = toSentenceCase(output[0].label);

  let nutritionData;

  if (result) {
    await axios
      .get(`https://api.api-ninjas.com/v1/nutrition?query=${result}`, {
        headers: {
          "X-Api-Key": process.env.NEXT_PUBLIC_API_NINJAS_KEY as string,
        },
      })
      .then((response) => {
        const data = response.data[0];

        const calculateCalories = (Number(data?.fat_total_g) * 9) + (Number(data?.carbohydrates_total_g) * 4) - (Number(data?.fiber_g) || 0);
        
        nutritionData = {
          ...data,
          name: toSentenceCase(result),
          calories: calculateCalories.toString(),
        }
      })
      .catch((error) => {
        console.error("Error fetching data from API Ninjas:", error);
      });

      return NextResponse.json({
        status: 200,
        success: true,
        data: nutritionData
      });

 
  } else {
    return NextResponse.json({
      status: 400,
      success: false,
      message: "File scanning Failed",
    });
  }
}
