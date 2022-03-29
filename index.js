/*
 * 2022 Huluobos 
 * A little font-end coder
 * 入口文件
 */
// 统一导入ui组件
import view from './packages/index';

// 导入各个工具函数
// ------1、导入js函数-----------------------------------------------
import isJsonFun  from './lib/isJson'


// 统一导出ui组件
export const ByView =  view

// ------1、导出js函数-----------------------------------------------
export const isJson = isJsonFun
