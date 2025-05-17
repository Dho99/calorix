export default function Contributors() {
  return (
    <div className="w-full h-full flex flex-col justify-between dark:text-white relative py-20 items-center">
      <h1 className="text-2xl font-bold text-center">Contributors</h1>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <p className="text-lg text-center">This project is made possible by the following contributors:</p>
        <ul className="list-disc list-inside">
          <li>John Doe</li>
          <li>Jane Smith</li>
          <li>Bob Johnson</li>
        </ul>
      </div>
    </div>
  );
}