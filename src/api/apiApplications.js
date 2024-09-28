import supabaseClient, { supabaseUrl } from "@/utils/supabase";

export async function applyToJob(token,_,jobData) {
    const supabase = await supabaseClient(token);

    const random = Math.floor(Math.random() *90000);
    const fileName = `resume-${random}-${jobData.candidate_id}`

    const {error:storageError} = await supabase.storage
    .from('resumes')
    .upload(fileName,jobData.resume)


    const resume = `${supabaseUrl}/storage/v1/object/public/resumes/${fileName}`;

    if (storageError) {
        console.error("Error Uploading Resume:", storageError);
        return null;
      }

    const { data, error } = await supabase.from("applications").insert([
        {
            ...jobData,
            resume,
        }
    ])
    .select()
  
    if (error) {
      console.error("Error Submitting Applications:", error);
      return null;
    }
  
    return data;
  }