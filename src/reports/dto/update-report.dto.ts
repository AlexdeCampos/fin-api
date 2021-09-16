import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, MaxLength, IsIn } from 'class-validator';
import { ReportStatus, ReportStatusList } from '../entities/report.entity';
import { CreateReportDto } from './create-report.dto';

export class UpdateReportDto extends PartialType(CreateReportDto) {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  file_url: string;

  @IsIn(ReportStatusList)
  @IsNotEmpty()
  status: ReportStatus;
}
