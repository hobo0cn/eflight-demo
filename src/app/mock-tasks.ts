import {Task} from './task'
import {TaskStatusEnum} from './task'

export const TASKS: Task[] = [
  {
    id: 1,
    name: 'A林地测量任务', //任务名称
    publishTime: new Date('2017/3/18'), //发布时间
    status: TaskStatusEnum.created,
    pilot: 'Jack',  //飞手
    cost: 5000,  //费用
    finishTime: new Date('2017/3/20'),  //预计完成时间
    selAreaId: 1, //选择的区域id
    wmsURL: '',  //WMS URL
    images: [] //上传图片URL
  },
  //TODO ...
];
