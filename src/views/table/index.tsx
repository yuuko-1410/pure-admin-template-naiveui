import { NButton, type DataTableColumns } from "naive-ui";
import type { FormProps } from "naive-ui-table";
import { ref } from "vue";

export default function useColumns() {
  /**
   * 列表数据
   */
  const dataList = ref([
    { no: 1, title: "Wonderwall" },
    { no: 2, title: "Wonderwall" }
  ]);

  /**
   * 表格列
   */
  const columns: DataTableColumns = [
    {
      title: "No",
      key: "no"
    },
    {
      title: "Title",
      key: "title"
    },
    {
      title: "option",
      key: "option",
      render: () => (
        <NButton type="primary" size="small">
          操作
        </NButton>
      )
    }
  ];

  // 搜索栏配置
  const search: FormProps = {
    grid: {
      cols: 4,
      xGap: 16
    },
    schemas: [
      {
        label: "姓名",
        field: "name",
        type: "input",
        componentProps: {
          placeholder: "请输入姓名"
        }
      },
      {
        label: "年龄",
        field: "age",
        type: "input-number",
        componentProps: {
          placeholder: "请输入姓名"
        }
      },
      {
        label: "学段",
        field: "stage",
        type: "select",
        componentProps: {
          placeholder: "请选择学段",
          options: [
            {
              label: "小学",
              value: "1"
            }
          ]
        }
      }
    ]
  };

  return {
    dataList,
    columns,
    search
  };
}
