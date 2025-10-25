// app/api/chat/route.ts
import { huggingface } from '@ai-sdk/huggingface';
import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: huggingface('meta-llama/Meta-Llama-3-8B-Instruct'),
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
