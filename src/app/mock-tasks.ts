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
    areaGeojson: '{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[107.5540816783905,23.437606137304957],[107.55412459373474,23.437261609451248],[107.55378127098083,23.437291140445335],[107.55329847335815,23.436887549621794],[107.55339503288269,23.436050833012878],[107.5537383556366,23.435627550828475],[107.55539059638977,23.435794895109904],[107.55578756332397,23.436040989256544],[107.55520820617676,23.437182860101444],[107.55499362945557,23.437871915321306],[107.55468249320984,23.43808847479131],[107.55411386489867,23.437684886402558],[107.5540816783905,23.437606137304957]]]}}', // 选择范围的geojson字符串
    drawGeojson: '{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[107.5540816783905,23.437606137304957],[107.55412459373474,23.437261609451248],[107.55378127098083,23.437291140445335],[107.55329847335815,23.436887549621794],[107.55339503288269,23.436050833012878],[107.5537383556366,23.435627550828475],[107.55531549453735,23.435888410939604],[107.55527257919312,23.43609512990731],[107.55510628223419,23.43625755172656],[107.55499362945557,23.436311692288626],[107.55514919757843,23.436309231354468],[107.55517467856407,23.436352297695628],[107.5552001595497,23.43639536402274],[107.55510091781615,23.436474113841754],[107.55527257919312,23.436439660801707],[107.55546569824219,23.436060676768488],[107.55596190690994,23.43645934825426],[107.55508482456207,23.43690969793065],[107.55491852760314,23.437404342528176],[107.55489706993102,23.437670120950326],[107.55499362945557,23.437871915321306],[107.55468249320984,23.43808847479131],[107.55431771278381,23.437990038712563],[107.55412459373474,23.437871915321306],[107.55411386489867,23.437684886402558],[107.5540816783905,23.437606137304957]]]}}',
    wmsURL: 'wsgeotiff:48',  // WMS URL
    images: [], // 上传图片URL
    thumbnail_URL: 'http://yiyuntu-oss-bucket01.img-cn-shenzhen.aliyuncs.com/efligt/1.png@10p'
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
    wmsURL: 'wsgeotiff:48',  // WMS URL
    images: [], // 上传图片URL
    thumbnail_URL: 'http://yiyuntu-oss-bucket01.img-cn-shenzhen.aliyuncs.com/efligt/2.png@10p'
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
    wmsURL: 'wsgeotiff:48',  // WMS URL
    images: [], // 上传图片URL
    thumbnail_URL: 'http://yiyuntu-oss-bucket01.img-cn-shenzhen.aliyuncs.com/efligt/3.png@10p'
  },
  // TODO ...
];
