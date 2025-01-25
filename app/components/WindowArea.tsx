'use client';

import React from 'react';
import Draggable from 'react-draggable';

function TrafficLights({ setCurrentApp, setMax, max }) {
  return (
    <div className="flex flex-row absolute left-0 space-x-2 py-1 pl-2">
      <button
        className="w-4 h-4 rounded-full bg-red-500"
        onClick={() => setCurrentApp(null)} // 창 닫기
      />
      <button
        className="w-4 h-4 rounded-full bg-yellow-500"
        onClick={() => setMax(false)} // 창 최소화
      />
      <button
        className="w-4 h-4 rounded-full bg-green-500"
        onClick={() => setMax(!max)} // 창 최대화
      />
    </div>
  );
}

export default function WindowArea({ currentApp, setCurrentApp }) {
  const [max, setMax] = React.useState(false); // 창 최대화 상태 관리

  const size = max ? "w-5/6 h-5/6" : "h-3/4 w-7/12 mt-16 mb-24"; // 최대화 상태에 따른 크기 변경

  if (currentApp == null) {
    return <div />; // 현재 앱이 없으면 아무것도 표시하지 않음
  }

  return (
    <Draggable>
      <div className={`transition-hw mt-6 mb-8 mx-auto rounded-lg bg-white ${size}`}>
        <div className="relative h-6 text-center bg-gray-300 rounded-t-lg">
          <TrafficLights
            setCurrentApp={setCurrentApp}
            max={max}
            setMax={setMax}
          />
          <span className="font-semibold text-gray-700">{currentApp.title}</span>
        </div>
        <div className="abcd w-full overflow-y-hidden">
          {currentApp.content?.() ?? `I'm ${currentApp.title} app`} {/* 앱 콘텐츠 */}
        </div>
      </div>
    </Draggable>
  );
}