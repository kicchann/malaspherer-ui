import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ApiService } from '../services/apiService';
import { selectLayerDataList, setIsLoading } from '../store/slices/viewerSlice';

export const useFetchLayers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    const fetchLayers = async () => {
      try {
        const data = await ApiService.fetchLayers();
        dispatch(selectLayerDataList(data));
      } catch (error) {
        console.error('Error fetching layers:', error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };
    fetchLayers();
  }, [dispatch]);
};