import { Feed } from '@/components/main/ui';
import { getFeeds } from '@/services/getFeeds';

export default async function Home() {
  const feeds = await getFeeds();

  return (
    <main className='flex flex-col h-[calc(100vh-56px)]'>
      <div className='flex flex-col gap-[15px] container max-w-[510px] mx-auto py-8'>
        {feeds.map(feed => (
          <Feed
            key={feed.id}
            {...feed}
          />
        ))}
      </div>
    </main>
  );
}
