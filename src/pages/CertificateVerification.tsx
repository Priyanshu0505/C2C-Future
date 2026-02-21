import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, CheckCircle, XCircle, Shield } from "lucide-react";

interface VerificationResult {
  found: boolean;
  name?: string;
  domain?: string;
  duration?: string;
  status?: string;
  date?: string;
}

const mockCertificates: Record<string, VerificationResult> = {
  "C2C-2025-001": { found: true, name: "Priya Sharma", domain: "Web Development", duration: "4 Weeks", status: "Completed", date: "January 2025" },
  "C2C-2025-002": { found: true, name: "Rahul Verma", domain: "Digital Marketing", duration: "4 Weeks", status: "Completed", date: "February 2025" },
  "C2C-2025-003": { found: true, name: "Sneha Patel", domain: "Data Analytics", duration: "4 Weeks", status: "Completed", date: "March 2025" },
};

const CertificateVerification = () => {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [searched, setSearched] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = certId.trim().toUpperCase();
    if (!trimmed) return;
    const found = mockCertificates[trimmed];
    setResult(found || { found: false });
    setSearched(true);
  };

  return (
    <div>
      <PageHero title="Certificate Verification" subtitle="Verify the authenticity of certificates issued by C2C Future." badge="Verification" />

      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 max-w-xl">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-xl font-bold mb-2">Verify Certificate</h2>
            <p className="text-muted-foreground text-sm mb-6">Enter the unique Certificate ID printed on your certificate to verify its authenticity.</p>

            <form onSubmit={handleVerify} className="flex gap-2">
              <Input
                placeholder="e.g. C2C-2025-001"
                value={certId}
                onChange={(e) => { setCertId(e.target.value); setSearched(false); }}
                className="flex-1"
              />
              <Button type="submit" variant="hero">
                <Search className="h-4 w-4" />
              </Button>
            </form>

            {searched && result && (
              <div className="mt-8 animate-fade-in">
                {result.found ? (
                  <div className="border border-primary/30 bg-primary/5 rounded-xl p-6 text-left">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-primary">Certificate Verified</span>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Student Name</span>
                        <span className="font-medium">{result.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Domain</span>
                        <span className="font-medium">{result.domain}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">{result.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status</span>
                        <span className="font-medium text-primary">{result.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Completion Date</span>
                        <span className="font-medium">{result.date}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="border border-destructive/30 bg-destructive/5 rounded-xl p-6">
                    <div className="flex items-center gap-2 justify-center">
                      <XCircle className="h-5 w-5 text-destructive" />
                      <span className="font-semibold text-destructive">Certificate Not Found</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      The Certificate ID you entered does not match our records. Please double-check and try again.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <p className="text-center text-muted-foreground text-xs mt-6">
            Demo IDs: C2C-2025-001, C2C-2025-002, C2C-2025-003
          </p>
        </div>
      </section>
    </div>
  );
};

export default CertificateVerification;
