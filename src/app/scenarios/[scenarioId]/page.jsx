import ScenarioFlow from '@/pages/ScenarioPage/ScenarioFlow';

export default async function Page({ params }) {
  const { scenarioId } = await params;
  return <ScenarioFlow scenarioId={scenarioId} />;
}
