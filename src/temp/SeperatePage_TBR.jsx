import React,{useState} from 'react';
import { Splitter,  Typography } from 'antd'
import ColumnGroup from 'antd/es/table/ColumnGroup';

const { Text } = Typography;

const SeperatePage_TBR = ({ prop, children = [], onSizeChange }) => {
  const [topChild, bottomChild, rightChild] = children;
  const [panelSize, setPanelSize] = useState(['50%','50%']);

  const handleResize = (newSizes) => {
    console.log('newSizes:',newSizes);
    const size1 = newSizes[0];
    const size2 = newSizes[1]
    setPanelSize(newSizes);
      if (onSizeChange) {
          onSizeChange(newSizes); // bottom child에게 height 값을 전달용
      }
  };    

  return (
  <Splitter>
    <Splitter.Panel min='100' style={{ height: prop, overflow: 'hidden' }}>
        <Splitter layout='vertical' onResize={handleResize} style={{ overflow: 'hidden' }} >
            <Splitter.Panel
                defaultSize={'50%'}
                min='100'
                >
                {topChild || <Text>Top</Text>}
            </Splitter.Panel>
            <Splitter.Panel
                id='BottomPanel'
                defaultSize={'50%'}
                // ref={bottomPanelRef} // Reference the BottomPanel
                 style={{ overflow: 'hidden' }}
                min='100'
            >
                {bottomChild || <Text>Bottom</Text>}
            </Splitter.Panel>
        </Splitter>
    </Splitter.Panel>

    <Splitter.Panel min='100' style={{ height: prop }}>
        {rightChild || <Text>Right</Text>}
    </Splitter.Panel>
  </Splitter>
  );
};

export default SeperatePage_TBR;
