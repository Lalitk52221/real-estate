import CompanySettings from "./components/CompanySettings";
import ContactSettings from "./components/ContactSettings";
import SecuritySettings from "./components/SecuritySettings";
import SocialSettings from "./components/SocialSettings";


export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <CompanySettings />
      <ContactSettings />
      <SocialSettings />
      <SecuritySettings />
    </div>
  );
}