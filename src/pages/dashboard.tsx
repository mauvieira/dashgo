import dynamic from "next/dynamic"
import { ApexOptions } from 'apexcharts'
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false
})

export default function Dashboard() {

  const options = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      foreColor: theme.colors.gray[500]
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories: [
        "2022-02-18T00:00.000Z",
        "2022-02-19T00:00.000Z",
        "2022-02-20T00:00.000Z",
        "2022-02-21T00:00.000Z",
        "2022-02-22T00:00.000Z",
        "2022-02-23T00:00.000Z",
        "2022-02-24T00:00.000Z",
      ]
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    }
  } as ApexOptions

  const series = [
    {
      name: "series-1",
      data: [30, 80, 45, 50, 65, 60, 70]
    }
  ]

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" maxWidth={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px">

          <Box p={["6", "8"]} pb="4" bg="gray.800" borderRadius="8">
            <Text fontSize="lg" mb="4">
              Subscribers of the week
            </Text>

            <Chart
              type="area"
              height={160}
              options={options}
              series={series}
            />
          </Box>

          <Box p={["6", "8"]} bg="gray.800" borderRadius="8">
            <Text fontSize="lg" mb="4">
              Open rate
            </Text>

            <Chart
              type="area"
              height={160}
              options={options}
              series={series}
            />
          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  )
}