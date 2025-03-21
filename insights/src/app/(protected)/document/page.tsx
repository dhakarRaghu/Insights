import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth";
import UploadPDF from "./uploadPdf";
import ChatPdfProject from "./chatPdfproject";

export default async function ChatPdfPage() {

  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Document Analysis</h2>
              <p className="text-muted-foreground flex items-center gap-2">
                Upload documents or paste text for instant AI-powered analysis, summaries, and interactive Q&A.
              </p>
         </div>
         <div className="container mx-auto px-4 py-8"></div>
          <UploadPDF></UploadPDF>
          <ChatPdfProject></ChatPdfProject>
    </div>
  );
}
