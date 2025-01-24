import React from 'react'
import { Splitter, Layout, Typography } from 'antd'

const { Text } = Typography;
const LR = ({ children }) => {
    const [leftChild, rightChild] = children;
    return (
        <Splitter>
            <Splitter.Panel>
                {leftChild || <Text>Left</Text>}
            </Splitter.Panel>
            <Splitter.Panel>
            {rightChild || <Text>Left</Text>}
            </Splitter.Panel>
        </Splitter>
    )
}

const TB = () => {
    return (
        <Splitter layout="vertical">
            <Splitter.Panel>
                <Text>Top</Text>
            </Splitter.Panel>
            <Splitter.Panel>
                <Text>Bottom</Text>
            </Splitter.Panel>
        </Splitter>
    )
  }
const LTB = ({ children }) => {
    const [leftChild, topChild, bottomChild] = children;
    return (
        <Splitter>
            <Splitter.Panel>
                {leftChild || <Text>Left</Text>}
            </Splitter.Panel>
            <Splitter.Panel>
                <Splitter layout='vertical'>
                    <Splitter.Panel>
                    {topChild ||<Text>Top</Text> }
                    </Splitter.Panel>
                    <Splitter.Panel>
                    { bottomChild|| <Text>Bottom</Text>}
                    </Splitter.Panel>
                </Splitter>
            </Splitter.Panel>
        </Splitter>
    )
}

const TBR = () => {
    return (
        <Splitter>
            <Splitter.Panel>
                <Splitter layout="vertical">
                    <Splitter.Panel>
                        <Text>Top</Text>
                    </Splitter.Panel>           
                    <Splitter.Panel>
                        <Text>Bottom</Text>
                    </Splitter.Panel>
                </Splitter>
            </Splitter.Panel>
            <Splitter.Panel>
                <Text>Right</Text>
            </Splitter.Panel>
        </Splitter>
    )
}

const TLR = () => {
    return (
        <Splitter layout="vertical">
            <Splitter.Panel>
                <Text>Top</Text>
            </Splitter.Panel>
            <Splitter.Panel>
                <Splitter >
                    <Splitter.Panel>
                        <Text>Left</Text>
                    </Splitter.Panel>
                    <Splitter.Panel>
                        <Text>Right</Text>
                    </Splitter.Panel>
                </Splitter>
            </Splitter.Panel>        
        </Splitter>

    )
}
export {LR, TB, LTB, TBR, TLR}