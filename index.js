import React from 'react';
import { Users, Star, Medal, Sparkles } from 'lucide-react';

const TeamIntroduction = () => {
  const teamData = {
    leader: {
      name: "김민준",
      role: "팀장",
      description: "10년 경력의 프로젝트 관리 전문가",
      specialty: "프로젝트 기획 및 팀 리드",
      email: "minjun.kim@example.com"
    },
    members: [
      {
        name: "이서연",
        role: "디자인 리드",
        description: "UI/UX 디자인 전문가",
        specialty: "사용자 중심 디자인",
        email: "seoyeon.lee@example.com"
      },
      {
        name: "박지훈",
        role: "백엔드 개발자",
        description: "클라우드 아키텍처 전문가",
        specialty: "시스템 설계 및 최적화",
        email: "jihun.park@example.com"
      },
      {
        name: "최유진",
        role: "프론트엔드 개발자",
        description: "모던 웹 개발 전문가",
        specialty: "반응형 웹 개발",
        email: "yujin.choi@example.com"
      },
      {
        name: "정현우",
        role: "데이터 분석가",
        description: "빅데이터 처리 전문가",
        specialty: "데이터 시각화",
        email: "hyunwoo.jung@example.com"
      },
      {
        name: "강은지",
        role: "마케팅 매니저",
        description: "디지털 마케팅 전문가",
        specialty: "콘텐츠 전략",
        email: "eunji.kang@example.com"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl font-bold text-white mb-4 animate-pulse">
            Dream Team
            <Sparkles className="inline-block ml-2 text-yellow-400" />
          </h1>
          <p className="text-xl text-blue-200">함께 만들어가는 미래</p>
        </div>

        {/* 팀장 카드 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-6">
            <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Medal size={48} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-3xl font-bold text-white">{teamData.leader.name}</h2>
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {teamData.leader.role}
                </span>
              </div>
              <p className="text-blue-200 mb-2">{teamData.leader.description}</p>
              <p className="text-blue-300">전문분야: {teamData.leader.specialty}</p>
              <p className="text-blue-300">{teamData.leader.email}</p>
            </div>
          </div>
        </div>

        {/* 팀원 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.members.map((member, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <Users size={32} className="text-white" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <span className="bg-blue-400/20 text-blue-200 px-2 py-1 rounded-full text-xs">
                  {member.role}
                </span>
              </div>
              <p className="text-blue-200 text-sm mb-2">{member.description}</p>
              <p className="text-blue-300 text-sm">전문분야: {member.specialty}</p>
              <p className="text-blue-300 text-sm">{member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamIntroduction;
