import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useFetchLayers } from '../../hooks/useFetchLayers';
import { useFetchMarkers } from '../../hooks/useFetchMarkers';
import { useFetchSpheres } from '../../hooks/useFetchSpheres';
import { RootState } from '../../store/store';
import { Header } from '../organisms/Header';
import { Sidebar } from '../organisms/Sidebar';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
`;

interface ViewPageTemplateProps {
  content: React.ReactNode;
}

export const ViewPageTemplate: React.FC<ViewPageTemplateProps> = ({
  content,
}) => {
  const isSidebarOpen = useSelector(
    (state: RootState) => state.viewer.isSidebarOpen
  );

  // カスタムフックの使用
  useFetchLayers(); // 修正箇所
  useFetchSpheres(); // 修正箇所
  useFetchMarkers(); // 修正箇所

  return (
    <Layout>
      <Header />
      <div style={{ display: 'flex', height: '100%' }}>
        {/* サイドバー */}
        <Sidebar isOpen={isSidebarOpen} />

        {/* メインコンテンツ */}
        <Content>{content}</Content>
      </div>
    </Layout>
  );
};