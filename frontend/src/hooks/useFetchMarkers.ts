import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ApiService } from '../services/apiService';
import { setIsLoading } from '../store/slices/statusSlice';
import { selectMarkerDataList } from '../store/slices/viewSlice';

export const useFetchMarkers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));
    const fetchMarkers = async () => {
      try {
        const data = await ApiService.fetchMarkers();
        dispatch(selectMarkerDataList(data));
      } catch (error) {
        console.error('Error fetching markers:', error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };
    fetchMarkers();
  }, [dispatch]);
};
