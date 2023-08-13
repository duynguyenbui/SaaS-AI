import Heading from '@/components/heading';
import { SubcriptionButton } from '@/components/subcription-button';
import { checkSubscription } from '@/lib/subcription';
import { Settings } from 'lucide-react';

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
        title="Settings"
        description="Management your subcriptions"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? 'You are currently in a pro plan'
            : 'You are currently in free plan'}
        </div>
        <SubcriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
