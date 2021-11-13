import Mock from 'mockjs'

// 图表数据
let List = []
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          A: Mock.Random.float(100, 2000, 0, 2),
          B: Mock.Random.float(100, 2000, 0, 2),
          C: Mock.Random.float(100, 2000, 0, 2),
          D: Mock.Random.float(100, 2000, 0, 2),
          E: Mock.Random.float(100, 2000, 0, 2),
          F: Mock.Random.float(100, 2000, 0, 2)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: '品种A',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '品种B',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '品种C',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '品种D',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '品种E',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '品种F',
            value: Mock.Random.float(1000, 10000, 0, 2)
          }
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: Mock.Random.integer(1, 30),
            active: Mock.Random.integer(50, 200)
          },
          {
            date: '周二',
            new: Mock.Random.integer(1, 30),
            active: Mock.Random.integer(50, 200)
          },
          {
            date: '周三',
            new: Mock.Random.integer(1, 30),
            active: Mock.Random.integer(50, 200)
          },
          {
            date: '周四',
            new: Mock.Random.integer(1, 30),
            active: Mock.Random.integer(50, 200)
          },
          {
            date: '周五',
            new: Mock.Random.integer(1, 30),
            active: Mock.Random.integer(50, 200)
          },
          {
            date: '周六',
            new: Mock.Random.integer(1, 30),
            active: Mock.Random.integer(50, 200)
          },
          {
            date: '周日',
            new: Mock.Random.integer(1, 30),
            active: Mock.Random.integer(50, 200)
          }
        ],
        // 折线图
        orderData: {
          date: ['20211101', '20211102', '20211103', '20211104', '20211105', '20211106', '20211107'],
          data: List
        },
        tableData: [
          {
            name: '王伟',
            todayBuy: Mock.Random.integer(1, 100),
            monthBuy: Mock.Random.integer(1, 20),
            totalBuy: Mock.Random.integer(1000, 10000)
          },
          {
            name: '娄宇飞',
            todayBuy: Mock.Random.integer(1, 100),
            monthBuy: Mock.Random.integer(1, 50),
            totalBuy: Mock.Random.integer(1000, 10000)
          },
          {
            name: '林炜锋',
            todayBuy: Mock.Random.integer(1, 100),
            monthBuy: Mock.Random.integer(1, 50),
            totalBuy: Mock.Random.integer(1000, 10000)
          },
          {
            name: '贾小慧',
            todayBuy: Mock.Random.integer(1, 100),
            monthBuy: Mock.Random.integer(1, 50),
            totalBuy: Mock.Random.integer(1000, 10000)
          },
          {
            name: '刘诗琪',
            todayBuy: Mock.Random.integer(1, 100),
            monthBuy: Mock.Random.integer(1, 50),
            totalBuy: Mock.Random.integer(1000, 10000)
          },
          {
            name: '张丽萍',
            todayBuy: Mock.Random.integer(1, 100),
            monthBuy: Mock.Random.integer(1, 50),
            totalBuy: Mock.Random.integer(1000, 10000)
          },
          {
            name: '刘梦君',
            todayBuy: Mock.Random.integer(1, 100),
            monthBuy: Mock.Random.integer(1, 50),
            totalBuy: Mock.Random.integer(1000, 10000)
          },
          {
            name: '李荣荣',
            todayBuy: Mock.Random.integer(1, 100),
            monthBuy: Mock.Random.integer(1, 50),
            totalBuy: Mock.Random.integer(1000, 10000)
          }
        ]
      }
    }
  }
}
