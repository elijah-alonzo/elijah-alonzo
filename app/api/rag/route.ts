
import { NextRequest, NextResponse } from 'next/server';
import { askProfessionalBackground } from '../../actions/rag';
import Groq from 'groq-sdk';

// This handler will process RAG queries for the MCP server
export async function POST(req: NextRequest) {
  const { question } = await req.json();
  try {
    const result = await askProfessionalBackground(question);
    const matches = Array.isArray(result) ? result : [];

    let context = '';
    if (matches.length > 0) {
      context = matches.map(
        (m: any) => `${m.metadata?.title || ''}: ${m.metadata?.content || ''}`
      ).join('\n\n');
    } else {
      context = 'No relevant information was found in the digital twin profile.';
    }

    const prompt = `Answer only the following question about yourself, using first person. Be formal, warm,concise, and direct.\n\nYour Information:\n${context}\n\nQuestion: ${question}`;

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content: 'You are an AI digital twin. Answer questions as if you are the person, using first person. Be concise and answer only what is asked, without extra information.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });
    const llmAnswer = completion.choices?.[0]?.message?.content?.trim() || 'No answer generated.';

    return NextResponse.json({
      answer: llmAnswer
    });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || JSON.stringify(err) || 'Error processing request.' }, { status: 500 });
  }
}
