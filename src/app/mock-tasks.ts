import {Task} from './task';
import {TaskStatusEnum} from './task';
import * as _ from '@angular/core';

// export const drawGeojson: _.string = 'test json!!!';

export const TASKS: Task[] = [
  {
    id: 1,
    name: 'A林地测量任务', // 任务名称
    publishTime: new Date('2017/3/18'), // 发布时间
    isUrgent: true, // 是否加急
    is3DModel: true, // 是否3D建模
    isReport: true, // 是否需要报告
    status: TaskStatusEnum.created,
    pilot: 'Jack',  // 飞手
    acreage: 500, // 面积
    cost: 50000,  // 费用
    finishTime: new Date('2017/3/20'),  // 预计完成时间
    selAreaId: 1, // 选择的区域id
    crop: '水稻', // 作物种类
    notes: '备注信息', // 备注
    areaGeojson: '', // 选择范围的geojson字符串
    wmsURL: '',  // WMS URL
    images: [], // 上传图片URL
    thumbnail_URL: ''
  },
  {
    id: 2,
    name: '无人机验标', // 任务名称
    publishTime: new Date('2017/3/18'), // 发布时间
    isUrgent: true, // 是否加急
    is3DModel: true, // 是否3D建模
    isReport: true, // 是否需要报告
    status: TaskStatusEnum.processing,
    pilot: 'Jack',  // 飞手
    acreage: 500, // 面积
    cost: 50000,  // 费用
    finishTime: new Date('2017/3/20'),  // 预计完成时间
    selAreaId: 1, // 选择的区域id
    crop: '水稻', // 作物种类
    notes: '备注信息', // 备注
    areaGeojson: '', // 选择范围的geojson字符串
    wmsURL: '',  // WMS URL
    images: [], // 上传图片URL
    thumbnail_URL: ''
  },
  {
    id: 3,
    name: 'B林地测量任务', // 任务名称
    publishTime: new Date('2017/3/18'), // 发布时间
    isUrgent: true, // 是否加急
    is3DModel: true, // 是否3D建模
    isReport: true, // 是否需要报告
    status: TaskStatusEnum.accepted,
    pilot: 'Jack',  // 飞手
    acreage: 500, // 面积
    cost: 50000,  // 费用
    finishTime: new Date('2017/3/20'),  // 预计完成时间
    selAreaId: 1, // 选择的区域id
    crop: '水稻', // 作物种类
    notes: '备注信息', // 备注
    areaGeojson: '', // 选择范围的geojson字符串
    wmsURL: '',  // WMS URL
    images: [], // 上传图片URL
    thumbnail_URL: ''
  },
  // TODO ...
];
