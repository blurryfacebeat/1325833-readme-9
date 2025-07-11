import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiExtraModels, ApiResponse } from '@nestjs/swagger';
import { CommonPostRdo, GetPostsDto } from '@project/core';

export const GetPostsSwaggerDecorator = () =>
  applyDecorators(
    ApiExtraModels(GetPostsDto),
    ApiResponse({
      type: CommonPostRdo,
      isArray: true,
      status: HttpStatus.OK,
      description: 'Posts get successfully',
    }),
    ApiOperation({
      summary: 'Get posts',
      description: 'Get all published posts',
    })
  );
