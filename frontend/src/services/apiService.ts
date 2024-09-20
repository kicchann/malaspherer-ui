import { sleep } from '../utils/sleepUtils';
import {
  isLayerDataList,
  isMarkerDataList,
  isSphereDataList,
} from '../utils/typeGuardUtils';
// import apiClient from './apiClient';

// 3. データのキャッシュ戦略
// react-queryを利用してデータのキャッシュや状態管理を行います。これにより、データの再フェッチを最小限に抑えられます。

export const ApiService = {
  async fetchLayers() {
    // const response = await apiClient.get<LayerData[]>('/layers');
    // if (!response.ok) {
    //   throw new Error('Failed to fetch layers');
    // }
    // sonct data = await response.data;
    const data = [
      {
        id: 'layer01',
        name: 'Layer Name 01',
        imageUrl: '/images/layer_sample.PNG',
        createdAt: '2021-01-01T00:00:00',
        updatedAt: '2021-01-02T00:00:00',
      },
      {
        id: 'layer02',
        name: 'Layer Name 02',
        imageUrl: '/images/layer_sample.PNG',
        createdAt: '2021-01-01T00:00:00',
        updatedAt: '2021-01-02T00:00:00',
      },
    ];
    if (!isLayerDataList(data)) {
      throw new Error('invalid data format');
    }
    sleep(1000);
    return data;
  },

  async fetchMarkers() {
    // const response = await apiClient.get<MarkerData[]>('/markers');
    // if (!response.ok) {
    //   throw new Error('Failed to fetch markers');
    // }
    // sonct data = await response.data;
    const data = [
      {
        id: 'marker01',
        sphereId: 'sphere01',
        name: 'Marker Name 01',
        description: 'This is marker 01',
        orientation: { yaw: 60, pitch: 0 },
        imageUrl: '/images/image-800x600.png',
        thumbnailUrl: '/images/image-160x120.png',
        markerType: 'default',
        createdAt: '2022-01-01T00:00:00',
      },
      {
        id: 'marker02',
        sphereId: 'sphere01',
        name: 'Marker Name 02',
        description: 'This is marker 02',
        orientation: { yaw: 45, pitch: 10 },
        imageUrl: '/images/image-800x600.png',
        thumbnailUrl: '/images/image-160x120.png',
        markerType: 'default',
        createdAt: '2023-01-01T00:00:00',
      },
    ];
    if (!isMarkerDataList(data)) {
      throw new Error('invalid data format');
    }
    sleep(1000);
    return data;
  },

  async fetchSpheres() {
    // const response = await apiClient.get<SphereData[]>('/spheres');
    // if (!response.ok) {
    //   throw new Error('Failed to fetch spheres');
    // }
    // sonct data = await response.data;
    const data = [
      {
        id: 'sphere01',
        layerId: 'layer01',
        name: 'Sphere Name 01',
        imageUrl: '/images/sphere_sample_01.jpg',
        position: {
          x: 500,
          y: 500,
        },
        createdAt: '2021-02-01T00:00:00',
      },
      {
        id: 'sphere02',
        layerId: 'layer01',
        name: 'Sphere Name 02',
        imageUrl: '/images/sphere_sample_02.JPG',
        position: {
          x: 600,
          y: 500,
        },
        createdAt: '2021-03-01T00:00:00',
      },
      {
        id: 'sphere03',
        layerId: 'layer02',
        name: 'Sphere Name 03',
        imageUrl: '/images/sphere_sample_01.jpg',
        position: {
          x: 500,
          y: 500,
        },
        createdAt: '2021-04-01T00:00:00',
      },
    ];
    if (!isSphereDataList(data)) {
      throw new Error('invalid data format');
    }
    sleep(1000);
    return data;
  },

  // 他のAPI呼び出しもここに追加
};