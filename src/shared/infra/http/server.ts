import app from './app';
import '../../././infra/typeorm/migrations';

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
