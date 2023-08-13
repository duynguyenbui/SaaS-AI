import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { checkApiLimit, increaseApiLimit } from '@/lib/api-limit';

import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!prompt) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse('Free Trial has expired', { status: 403 });
    }

    const response = await replicate.run(
      'replicate/llama-2-70b-chat:58d078176e02c219e11eb4da5a02a7830a283b14cf8f94537af893ccff5ee781',
      {
        input: {
          prompt: prompt,
        },
      }
    );

    await increaseApiLimit();

    return NextResponse.json(response);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
