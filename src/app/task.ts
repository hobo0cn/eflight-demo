export enum TaskStatusEnum {
  created,  // 新创建
  accepted, // 平台已经接受
  canceled, // 业主已经取消
  allocated, // 已经分配飞行员
  processing, // 服务中
  finished // 已经处理完成
};

export class Task {

  public   id: number;
  public   name: string;  // 任务名称
  public   publishTime: Date; // 发布时间
  public   isUrgent: Boolean; // 是否加急
  public   is3DModel: Boolean; // 是否3D建模
  public   isReport: Boolean; // 是否需要报告
  public   status: TaskStatusEnum;
  public   pilot: string;  // 飞手
  public   acreage: number; // 面积
  public   cost: number;  // 费用
  public   finishTime: Date;  // 预计完成时间
  public   selAreaId: number;  // 选择的区域id
  public   crop: string; // 作物种类
  public   notes: string; // 备注
  public   areaGeojson: string; // 选择范围的geojson字符串
  public   drawGeojson: string; // 绘制的geojson字符串
  public   wmsURL: string;    // WMS URL
  public   images: string[];  // 上传图片URL
  public   thumbnail_URL: string; // 缩略图URL

}
