import * as actions from './viewerActions';
import Api from '../../api';

export function fetchViewer() {
  return async function fetchViewerThunk(dispatch) {
    try {
      dispatch(actions.fetchViewer.start());
      
      const res = await Api.Viewer.get();
      
      dispatch(actions.fetchViewer.success(res.data));
    } catch ({ message }) {
      console.log(message);
      dispatch(actions.fetchViewer.error({ message }));
    }
  };
}