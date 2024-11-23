"use client";

import React, {useState} from "react";
import {ask} from "../api/route";
import axios from "axios";


const Chat: React.FC = () => {
  const [prompt, setPrompt] = useState<any>("");
  const [response, setResponse] = useState<any>("");
  const [loading , setLoading] = useState(false);

    const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      try {
        const response = await ask(prompt);
        const t = response ?? "";
        setResponse(t);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  /** ユーザのメッセージ投稿と回答*/
  return (
    <div>
        <div className="mt-3 p-3">
          <form id="question" onSubmit={(e) =>handleSubmit(e)}>
            <div className="space-y-3 bg-white px-4 py-5 sm:p-6">
              <label className="block text-sm font-medium">
                質問文
              </label>
              <div>
                    <textarea
                      rows={3}
                      className="mt-1 px-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                      placeholder="ここに質問を入れてください"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  disabled={loading}
                >
                  {loading ? "NowLoading..." : "質問する"}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-3 p-3 md:col-span-2 md:mt-0">
          <div className="bg-white px-4 py-5 sm:p-6">
            <h2 className="text-base font-semibold leading-6 text-gray-900">質問の答え</h2>
            {loading ? (
              <p className="mt-1 text-sm text-gray-600">ロード中...</p>
              ): (
                <p className="mt-1 text-sm text-gray-600">{response}</p>
                
              )
            }
          </div>
        </div>
    </div>
  );
};

export default Chat;
