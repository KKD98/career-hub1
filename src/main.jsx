import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import Blogs from './component/Blogs/Blogs';
import Homepage from './component/Homepage/Homepage';
import JobDetails from './component/JobDetails/JobDetails';
import ErrorPage from './component/ErrorPage/ErrorPage';
import RemoteJobs from './component/RemoteJobs/RemoteJobs';
import OnsiteJobs from './component/OnsiteJobs/OnsiteJobs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "applied-jobs",
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "jobDetails/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => params
      },
      {
        path: "remoteJobs",
        element: <RemoteJobs></RemoteJobs>
      },
      {
        path: "onsiteJobs",
        element: <OnsiteJobs></OnsiteJobs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
