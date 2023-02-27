import { LineWave } from 'react-loader-spinner';

export function Loader() {
  return (
    <div>
      <LineWave
        height="100"
        width="100"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        color="red"
        firstLineColor="blue"
        middleLineColor="green"
        lastLineColor="grey"
      />
    </div>
  );
}
