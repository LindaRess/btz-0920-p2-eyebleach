import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home';
import ImagesPage from '../Pages/ImagesPage';
import VideosPage from '../Pages/VideosPage';
import TopPage from '../Pages/TopPage';
import postPageMobile from '../Pages/postPageMobile';
import Navigation from './Navigation';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Photos" component={ImagesPage} />
        <Route path="/Vidéos" component={VideosPage} />
        <Route path="/Tops" component={TopPage} />
        <Route path="/Post/:id/:title" component={postPageMobile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

// https://www.reddit.com/r/Eyebleach/comments/jow622/stop_it_im_trying_to_pose_for_a_picture/
