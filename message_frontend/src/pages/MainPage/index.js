import React from 'react';
import {LeftBar} from './LeftBar';
import {Middle} from './Middle';
import {RightBar} from './RightBar';

export const MainPage = () => {
  return (
    <div className="container-fluid px-4 py-4 h-100">
      <div className="row h-100" style={{backgroundColor: '#EFF5F5', borderRadius: '2em'}}>
        <div className="col-2 h-100">
          <LeftBar />
        </div>
        <div className="col-8 h-100">
          <Middle />
        </div>
        <div className="col-2 h-100 overflow-auto">
          <RightBar />
        </div>
      </div>
    </div>
  );
};