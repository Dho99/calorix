-- AlterTable
ALTER TABLE `Account` MODIFY `refresh_token` TEXT NULL,
    MODIFY `id_token` TEXT NULL;

-- AlterTable
ALTER TABLE `Authenticator` MODIFY `credentialPublicKey` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `Chatbot` MODIFY `payload` TEXT NULL;
