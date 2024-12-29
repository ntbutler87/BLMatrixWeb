
const Tile = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column' as 'column',
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowRadius: 5,
    shadowColor: 'rgb(20,20,20)',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.7,
    height: 300,
};
const TilePortConnectionStatusConnectedText = {
    color: '#24D015', 
    alignSelf: 'center',
    fontSize: 14,
    textAlignVertical: 'center'
};
const TilePortName = {
    color: '#303030', 
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600'
};
const TilePortConnectionStatusDisonnectedText = {
    color: '#E31010',
};
const TilePortImageContainer = {
    width: 50,
    height: 50,
    padding: 10,
    margin: 15,
    borderRadius: 50,
    backgroundColor: '#E8F6FF',
    alignSelf: 'center',
    alignContent: 'center',
};
const TilePortConnectionImage = {
    width: 15,
    height: 15,
    alignSelf: 'center',
};
const TilePortConnectionText = {
    display: 'flex',
    color: '#303030', 
    fontSize: 13,
    fontWeight: '400',
};
const TilePortImage = {
    width: 30,
    height: 30,
    alignSelf: 'center',
};
const VerticalList = {
    flex:1, 
    flexDirection: 'column' as 'column',        
};
const HorizontalList = {
    display: 'flex',
    flex:1, 
    flexDirection: 'row' as 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 8,
    padding: 5,
};
const Disabled = {
    backgroundColor: '#aaa',
    opacity: 0.6,
};

const CommonStyles = {
    Tile: Tile,
    TilePortImageContainer: TilePortImageContainer,
    TilePortImage: TilePortImage,
    TilePortName: TilePortName,
    TilePortConnectionImage: TilePortConnectionImage,
    TilePortConnectionText: TilePortConnectionText,
    TilePortConnectionStatusConnectedText: TilePortConnectionStatusConnectedText,
    TilePortConnectionStatusDisonnectedText: TilePortConnectionStatusDisonnectedText,
    Disabled: Disabled,
    VerticalList: VerticalList,
    HorizontalList: HorizontalList,
};

export default CommonStyles;