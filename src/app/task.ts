export enum TaskStatusEnum {
  created, //新创建
  feedbacked, //平台已经反馈
  accepted, //业主接受
  rejected, //业主没有接受
  allocated, //已经分配飞行员
  processing,//数据处理中
  finished //已经处理完成
};

export class Task {
  id: number;
  name: string; //任务名称
  publishTime: Date; //发布时间
  status: TaskStatusEnum;
  pilot: string;  //飞手
  cost: number;  //费用
  finishTime: Date;  //预计完成时间
  selAreaId: number; //选择的区域id
  wmsURL: string;   //WMS URL
  images: string[]; //上传图片URL
}
