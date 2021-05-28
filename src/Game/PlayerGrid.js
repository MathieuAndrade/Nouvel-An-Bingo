import React from "react";
import {Checkbox, Space} from "antd";

function playerGrid({data, cb, index}) {
    console.log(data)
    return (
        <Space direction="vertical">
            {
                data.map((obj, i) =>
                    <div key={i}>
                        <Checkbox onChange={(e) => cb(e, index, i) } checked={obj.checked}>{obj.value}</Checkbox>
                        <br/>
                    </div>
                )
            }
        </Space>
    )
}

export default playerGrid;
