import exportAll from '@/utils/exportAll';

const apis = exportAll(require.context('./', false, /\.ts$/))
export default apis
