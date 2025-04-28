"use client";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sensitiveWords = [
  { word: "最好", type: "极限词", suggestion: "更适合" },
  { word: "唯一", type: "极限词", suggestion: "专属" },
  { word: "第一", type: "极限词", suggestion: "领先" },
  { word: "顶级", type: "极限词", suggestion: "优质" },
  { word: "立刻", type: "虚假承诺", suggestion: "较快" },
  { word: "马上", type: "虚假承诺", suggestion: "尽快" },
  { word: "100%", type: "虚假承诺", suggestion: "大概率" },
  { word: "点赞收藏", type: "诱导互动", suggestion: "欢迎支持" },
  { word: "转发给好友", type: "诱导互动", suggestion: "可以分享" },
  { word: "点进主页", type: "诱导互动", suggestion: "主页有更多内容" },
  { word: "三天瘦五斤", type: "敏感行业", suggestion: "逐步改善体型" },
  { word: "稳赚不赔", type: "敏感行业", suggestion: "理性投资" },
];

export default function SensitiveWordChecker() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const checkText = () => {
    const matches = [];
    sensitiveWords.forEach(({ word, type, suggestion }) => {
      if (input.includes(word)) {
        matches.push({ word, type, suggestion });
      }
    });
    setResults(matches);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <Card>
        <CardContent className="space-y-4 p-4">
          <h2 className="text-xl font-bold">文案敏感词检测</h2>
          <Textarea
            rows={6}
            placeholder="请粘贴你的视频口播文案..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={checkText}>开始检测</Button>
        </CardContent>
      </Card>

      {results.length > 0 && (
        <Card>
          <CardContent className="space-y-3 p-4">
            <h3 className="font-semibold text-lg">检测结果：</h3>
            {results.map((item, index) => (
              <div key={index} className="space-y-1">
                <div>
                  <Badge>{item.type}</Badge>
                  <span className="ml-2 font-medium">"{item.word}"</span> 建议替换为：
                  <span className="text-green-700">{item.suggestion}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}