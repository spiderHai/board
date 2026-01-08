import { MONTHS, CHART_COLORS } from '@/data/constants'

/**
 * Composable for building ECharts options
 * @returns {Object} - Chart option builders
 */
export function useChartOptions() {
  // Build bar chart options
  const buildBarOptions = (data, config = {}) => {
    const {
      title = '',
      xAxisData = MONTHS,
      seriesData = [],
      seriesNames = [],
      colors = [CHART_COLORS.primary, CHART_COLORS.success],
      stack = false,
      showLegend = true,
      yAxisFormatter = '{value}'
    } = config

    const series = seriesData.map((data, index) => ({
      name: seriesNames[index] || `系列${index + 1}`,
      type: 'bar',
      data,
      stack: stack ? 'total' : undefined,
      itemStyle: {
        color: colors[index] || CHART_COLORS.primary
      }
    }))

    return {
      title: {
        text: title,
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: showLegend ? {
        data: seriesNames,
        top: 30
      } : undefined,
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: xAxisData
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: yAxisFormatter
        }
      },
      series
    }
  }

  // Build line chart options
  const buildLineOptions = (data, config = {}) => {
    const {
      title = '',
      xAxisData = MONTHS,
      seriesData = [],
      seriesNames = [],
      colors = [CHART_COLORS.primary],
      smooth = true,
      showArea = false,
      showLegend = true,
      yAxisFormatter = '{value}'
    } = config

    const series = seriesData.map((data, index) => ({
      name: seriesNames[index] || `系列${index + 1}`,
      type: 'line',
      data,
      smooth,
      itemStyle: {
        color: colors[index] || CHART_COLORS.primary
      },
      areaStyle: showArea ? {} : undefined
    }))

    return {
      title: {
        text: title,
        left: 'center'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: showLegend ? {
        data: seriesNames,
        top: 30
      } : undefined,
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: xAxisData,
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: yAxisFormatter
        }
      },
      series
    }
  }

  // Build pie chart options
  const buildPieOptions = (data, config = {}) => {
    const {
      title = '',
      seriesName = '数据',
      pieData = [],
      radius = '50%',
      center = ['50%', '60%']
    } = config

    return {
      title: {
        text: title,
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'middle'
      },
      series: [
        {
          name: seriesName,
          type: 'pie',
          radius,
          center,
          data: pieData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }

  // Build combo chart (bar + line) options
  const buildComboOptions = (data, config = {}) => {
    const {
      title = '',
      xAxisData = MONTHS,
      barSeriesData = [],
      lineSeriesData = [],
      barSeriesNames = [],
      lineSeriesNames = [],
      colors = [CHART_COLORS.primary, CHART_COLORS.success],
      showLegend = true
    } = config

    const barSeries = barSeriesData.map((data, index) => ({
      name: barSeriesNames[index] || `系列${index + 1}`,
      type: 'bar',
      data,
      itemStyle: {
        color: colors[index] || CHART_COLORS.primary
      }
    }))

    const lineSeries = lineSeriesData.map((data, index) => ({
      name: lineSeriesNames[index] || `系列${index + 1}`,
      type: 'line',
      yAxisIndex: 1,
      data,
      itemStyle: {
        color: colors[barSeriesData.length + index] || CHART_COLORS.success
      }
    }))

    const allSeriesNames = [...barSeriesNames, ...lineSeriesNames]

    return {
      title: {
        text: title,
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      legend: showLegend ? {
        data: allSeriesNames,
        top: 30
      } : undefined,
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: xAxisData,
        axisPointer: {
          type: 'shadow'
        }
      },
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        },
        {
          type: 'value',
          axisLabel: {
            formatter: '{value}%'
          }
        }
      ],
      series: [...barSeries, ...lineSeries]
    }
  }

  return {
    buildBarOptions,
    buildLineOptions,
    buildPieOptions,
    buildComboOptions
  }
}
