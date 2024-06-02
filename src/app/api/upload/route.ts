import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server"
import { join } from "path";
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;
  console.log(file);
  if (!file) {
    return NextResponse.json({ success: false });
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const path = join('/', 'tmp', file.name);
  await writeFile(path, buffer);
  console.log(`open ${path} to see the uploaded file`);
  return NextResponse.json({ success: true });
}