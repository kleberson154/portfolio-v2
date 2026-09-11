import SmartStockHero from '../components/projects/smartstock/SmartStockHero'
import SmartStockOverview from '../components/projects/smartstock/SmartStockOverview'
import SmartStockArchitecture from '../components/projects/smartstock/SmartStockArchitecture'
import SmartStockTechnicalDecisions from '../components/projects/smartstock/SmartStockTechnicalDecisions'
import SmartStockTechnologies from '../components/projects/smartstock/SmartStockTechnologies'
import SmartStockGallery from '../components/projects/smartstock/SmartStockGallery'
import SmartStockApiSecurity from '../components/projects/smartstock/SmartStockApiSecurity'
import SmartStockTesting from '../components/projects/smartstock/SmartStockTesting'
import SmartStockDeployment from '../components/projects/smartstock/SmartStockDeployment'
import SmartStockConclusion from '../components/projects/smartstock/SmartStockConclusion'

export default function SmartStockProject() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <SmartStockHero />
      <SmartStockOverview />
      <SmartStockArchitecture />
      <SmartStockTechnicalDecisions />
      <SmartStockTechnologies />
      <SmartStockGallery />
      <SmartStockApiSecurity />
      <SmartStockTesting />
      <SmartStockDeployment />
      <SmartStockConclusion />
    </main>
  )
}
