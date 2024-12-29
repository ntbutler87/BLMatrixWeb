import { useState, useEffect } from 'react'
import './App.css'

import matrixSDK, { MatrixStatus, statusSchema } from './config/MatrixSDK';
import appSettings, { AppConfig, blankConfig } from './config/AppSettings';
import InputPort from './components/InputPort';
import InputTile from './components/InputTile';
import OutputTile from './components/OutputTile';
import SceneTile from './components/SceneTile';


function App() {
  const [matrixStatus, setMatrixStatus] = useState<MatrixStatus>(statusSchema);
  const [appConfig, setAppConfig] = useState<AppConfig>(blankConfig);

  
  const updateStatusState = (state: MatrixStatus) => {
    setMatrixStatus({ ...state });
  }
  useEffect(() => {
    Promise.resolve(matrixSDK.init(updateStatusState)).catch((e) => { console.log(e) });
    return (() => { Promise.resolve(matrixSDK.stopConnection()); })
  }, []);
  
  const updateConfig = (config: AppConfig) => {
    setAppConfig({...config});
  }
  useEffect( () => {
    Promise.resolve(appSettings.init(updateConfig))
      .catch((e) => { console.log(e) });
  }, [] );

  const InputGrid = () => {
    return <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {matrixStatus.HDMI_IN.slice(0,4).map( (data) => {
            return <InputTile 
              key={"HDMI_IN" + data.port}
              disabled={!matrixStatus.isConnected}
              port={data}
              onPressF={()=>{}}
              outputs={matrixStatus?.HDMI_OUT.filter((val) => { return val.input == data.port })}
              appPortConfig={appConfig?.HDMI_IN[data.port - 1]}
              
            />
          } )}
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          {matrixStatus.HDMI_IN.slice(4,8).map( (data) => {
            return <InputTile 
              key={"HDMI_IN" + data.port}
              disabled={!matrixStatus.isConnected}
              port={data}
              onPressF={()=>{}}
              outputs={matrixStatus?.HDMI_OUT.filter((val) => { return val.input == data.port })}
              appPortConfig={appConfig?.HDMI_IN[data.port - 1]}
              
            />
          } )}
        </div>
      </div>
    ;
  }


  const OutputGrid = () => {
    return <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {matrixStatus.HDMI_OUT.slice(0,4).map( (item) => {
            return <OutputTile 
              key={"OUTPUTTILE" + item.port}
              port={item}
              input={matrixStatus.HDMI_IN[item.input -1]}
              appPortConfig={appConfig.HDMI_OUT[item.port-1]}
              disabled={!matrixStatus.isConnected}
              onPressF={() => {}}
            />
          } )}
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          {matrixStatus.HDMI_OUT.slice(4,8).map( (item) => {
            return <OutputTile 
              key={"OUTPUTTILE" + item.port}
              port={item}
              input={matrixStatus.HDMI_IN[item.input -1]}
              appPortConfig={appConfig.HDMI_OUT[item.port-1]}
              disabled={!matrixStatus.isConnected}
              onPressF={() => {}}
              
            />
          } )}
        </div>
      </div>
    ;
  }


  const SceneGrid = () => {
    return <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {matrixStatus.Scenes.slice(0,4).map( (item) => {
            return <SceneTile 
              key={"SCENESELECT" + item.port}
              port={item}
              appPortConfig={appConfig.Scene[item.port-1]}
              disabled={!matrixStatus.isConnected}
              onPressF={() => {}}
            />
          } )}
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          {matrixStatus.Scenes.slice(4,8).map( (item) => {
            return <SceneTile 
              key={"SCENESELECT" + item.port}
              port={item}
              appPortConfig={appConfig.Scene[item.port-1]}
              disabled={!matrixStatus.isConnected}
              onPressF={() => {}}
            />
          } )}
        </div>
      </div>
    ;
  }


  return (
    <>
      <div style={{background:'rgb(225 225 225)',padding:'0.5em', marginTop:'1em'}}>
        <h2>Test buttons</h2>
        <div style={{display:'flex', justifyContent:'center', flex:1, flexDirection:'row', columnGap: '1em'}}>
          <button
            onClick={() => {
              matrixSDK.setOutputSource(3,3);
            }}
            >Test: In3 to Out3</button>
          <button
            onClick={() => {
              matrixSDK.setOutputSource(3,4);}}
              >Test: In4 to Out3</button>
        </div>
      </div>
      <hr />
      <div style={{background:'rgb(225 225 225)',padding:'0.5em', marginTop:'1em'}}>
        <h2>Outputs</h2>
      </div>
      <OutputGrid />
      <hr />
      <div style={{background:'rgb(225 225 225)',padding:'0.5em', marginTop:'1em'}}>
        <h2>Inputs</h2>
      </div>
      <InputGrid />
      <hr />
      <div style={{background:'rgb(225 225 225)',padding:'0.5em', marginTop:'1em'}}>
        <h2>Scenes</h2>
      </div>
      <SceneGrid />
      <hr />
      <div style={{background:'rgb(225 225 225)',padding:'2em',marginTop:'1em'}}>
        <h2>Diagnostics</h2>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div>Config: {JSON.stringify(appConfig)}</div>
          <div>Status: {JSON.stringify(matrixStatus)}</div>
        </div>
      </div>
    </>
  )
}

export default App
