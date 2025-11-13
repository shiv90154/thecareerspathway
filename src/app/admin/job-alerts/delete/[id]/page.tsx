import dbConnect from "@/lib/db";
import JobAlert from "@/models/JobAlert";
import { redirect } from "next/navigation";

export default async function DeleteAlert({ params }: any) {
  await dbConnect();

  await JobAlert.findByIdAndDelete(params.id);

  redirect("/admin/job-alerts");
}
