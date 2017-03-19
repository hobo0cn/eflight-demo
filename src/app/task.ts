export enum TaskStatusEnum {
  created,  // 新创建
  accepted, // 平台已经接受
  canceled, // 业主已经取消
  allocated, // 已经分配飞行员
  processing,// 服务中
  finished // 已经处理完成
};

export class Task {
  id: number;
  name: string;  // 任务名称
  publishTime: Date; // 发布时间
  isUrgent: Boolean; // 是否加急
  is3DModel: Boolean; // 是否3D建模
  isReport: Boolean; // 是否需要报告
  status: TaskStatusEnum;
  pilot: string;  // 飞手
  acreage: number; // 面积
  cost: number;  // 费用
  finishTime: Date;  // 预计完成时间
  selAreaId: number;  // 选择的区域id
  crop: string; // 作物种类
  notes: string; // 备注
  areaGeojson: string; //选择范围的geojson字符串
  wmsURL: string;    // WMS URL
  images: string[];  // 上传图片URL
}
