'use strict';
import React, {Component} from 'react';
import mockData from './data.js';
import { TreeCanvas } from 'butterfly-dag';
import './index.less';
class MindMap extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    let root = document.getElementById('dag-canvas');
    this.canvas = new TreeCanvas({
      root: root,
      disLinkable: true, // 可删除连线
      linkable: true,    // 可连线
      draggable: true,   // 可拖动
      zoomable: true,    // 可放大
      moveable: true,    // 可平移
      theme: {
        edge: {
          type: 'AdvancedBezier',
        }
      },
      layout: {
        type: 'mindmap',
        options: {
          direction: 'H',
          getSide(d) {
            return d.data.side || 'right';
          },
          getHeight(d) {
            return 10;
          },
          getWidth(d) {
            return 40;
          },
          getHGap(d) {
            return 50;
          },
          getVGap(d) {
            return 20;
          },
        }
      }
    });
    this.canvas.draw(mockData, {}, () => {
      this.canvas.focusCenterWithAnimate();
    }
    );
    this.canvas.on('events', (data) => {
      console.log(data);
    });
  }
  render() {
    return (
      <div className='mind-map'>
        <div className="compactBoxTree-canvas" id="dag-canvas">
        </div>
      </div>
    );
  }
}

export default MindMap;
