import { Index } from "@upstash/vector";

export async function askProfessionalBackground(question: string) {
  const index = new Index({
    url: process.env.UPSTASH_VECTOR_REST_URL!,
    token: process.env.UPSTASH_VECTOR_REST_TOKEN!,
  });

  const result = await index.query({
    data: question,
    topK: 3,
    includeMetadata: true,
  });

  return result;
}