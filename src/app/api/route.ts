import OpenAI from 'openai';

  import { NextResponse } from "next/server";

  // export async function GET() {
  //   return NextResponse.json({
  //     message: "データを取得!",
  //   });
  // }
console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY);
export async function ask(content:any):Promise<string | null> {
    const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, 
    //   dangerouslyAllowBrowser: true // ***注意*** クライアントサイドの実行を許可
    });
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: content }],
        model: "gpt-3.5-turbo",
    });
        // 回答結果を返却
    console.log(completion);
    const answer = completion.choices[0].message?.content
    return NextResponse.json({res:answer})    
}

// const openai = new OpenAI({
//     apiKey: process.env.NODE_ENV, 
// //   dangerouslyAllowBrowser: true // ***注意*** クライアントサイドの実行を許可
// });
// export async function ask(content: string) {
//     // メッセージを送信
//     const completion = await openai.chat.completions.create({
//         messages: [{ role: 'user', content: content }],
//         model: "gpt-3.5-turbo",
//         });
//         // 回答結果を返却
//         console.log(completion);
//         const answer = completion.choices[0].message?.content
//         return answer    
// }

