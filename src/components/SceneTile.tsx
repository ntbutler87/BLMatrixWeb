import { MatrixScene } from "../config/MatrixSDK";
import { MatrixPreset, getImage } from "../config/AppSettings";
import CommonStyles from "./CommonStyles";

interface PortStatus {
    port: MatrixScene;
    onPressF: Function;
    appPortConfig: MatrixPreset;
    disabled?: boolean;
}

export default function SceneTile({ port, onPressF, appPortConfig, disabled }: PortStatus) {
    return (
        <div style={{...CommonStyles.Tile, ...(disabled) ? CommonStyles.Disabled : null}} onClick={ (disabled) ? () => {} : () => {onPressF(port)}}>
            <div style={{flex:1}}>
                <div style={{...CommonStyles.TilePortImageContainer, ...(disabled) ? CommonStyles.Disabled : null}}>
                    <img style={{...CommonStyles.TilePortImage, ...(disabled) ? CommonStyles.Disabled : null}} src={getImage(port, appPortConfig)} />
                </div>
                <div style={CommonStyles.TilePortName}>{ (appPortConfig?.overrideName) ? appPortConfig.name : port.name}</div>
            </div>
        </div>
    );
}
