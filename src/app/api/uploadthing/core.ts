import { getAuthSession } from "@/lib/auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
	imageUploader: f({ image: { maxFileSize: "4MB" } })
		.middleware(async (req) => {
			const session = await getAuthSession();
			const user = session?.user;

			if (!user) throw new Error("Unauthorized");

			return { userId: user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
