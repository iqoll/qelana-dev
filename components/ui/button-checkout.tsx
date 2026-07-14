'use client'

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ShieldCheck, Loader2, CreditCard } from 'lucide-react';

interface ButtonCheckoutProps {
  variant?: "large" | "small";
  className?: string;
  price: string | number;
  planName?: string;
}

type ModalStep = 'closed' | 'form' | 'payment';

export default function ButtonCheckout({ variant = "large", className = "", price, planName }: ButtonCheckoutProps) {
  const [modalStep, setModalStep] = useState<ModalStep>('closed');
  const [loading, setLoading] = useState(false);
  const [invoiceUrl, setInvoiceUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Form fields
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (modalStep !== 'closed') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalStep]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    if (modalStep !== 'closed') {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalStep]);

  const handleClose = () => {
    setModalStep('closed');
    setInvoiceUrl(null);
    setError(null);
    setLoading(false);
    setIframeLoaded(false);
  };

  const handleOpenForm = () => {
    setError(null);
    setModalStep('form');
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: price,
          customerName,
          customerEmail,
          customerPhone,
          planName,
        }),
      });

      const data = await response.json();

      if (data.invoiceUrl) {
        setInvoiceUrl(data.invoiceUrl);
        setModalStep('payment');
      } else {
        setError(data.error || 'Terjadi kesalahan saat membuat invoice.');
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError('Gagal terhubung ke server. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  // Button styles (matching existing pattern)
  const baseStyles = "mt-3 bg-primary text-white border border-transparent font-bold transition-all active:scale-95 flex items-center justify-center whitespace-nowrap group hover:bg-transparent hover:border-[#131118] hover:text-[#131118]";

  const sizeStyles = variant === "large"
    ? "min-w-[200px] h-14 px-8 rounded-xl text-base hover:shadow-xl hover:shadow-primary/20"
    : "px-6 py-2.5 rounded-lg text-sm tracking-wide hover:shadow-lg hover:shadow-primary/10";

  // Modal JSX structure
  const modalContent = (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]" />

      {/* ───── STEP 1: Info Form Modal ───── */}
      {modalStep === 'form' && (
        <div
          ref={modalRef}
          className="relative z-10 w-full max-w-md bg-[#0d0a14] border border-white/10 rounded-3xl shadow-2xl shadow-primary/10 animate-[slideUp_300ms_ease-out]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-0">
            <div>
              <h3 className="text-white text-lg font-bold">Checkout</h3>
              {planName && (
                <p className="text-white/40 text-sm mt-0.5">{planName}</p>
              )}
            </div>
            <button
              onClick={handleClose}
              className="text-white/40 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>

          {/* Price Display */}
          <div className="mx-6 mt-4 p-4 rounded-2xl bg-primary/10 border border-primary/20">
            <div className="flex items-baseline gap-1.5">
              <span className="text-primary/60 text-sm font-medium">Rp</span>
              <span className="text-white text-2xl font-black tracking-tight">{price}</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmitForm} className="p-6 space-y-4">
            <div>
              <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-2">
                Nama Lengkap <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Muhammad Haiqal"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="email@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            <div>
              <label className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-2">
                No. WhatsApp
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="08571384xxxx"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-primary text-white font-bold rounded-xl transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Memproses...
                </>
              ) : (
                <>
                  <ShieldCheck size={18} />
                  Lanjut ke Pembayaran
                </>
              )}
            </button>

            <p className="text-center text-white/30 text-xs">
              Pembayaran diproses secara aman oleh Xendit
            </p>
          </form>
        </div>
      )}

      {/* ───── STEP 2: Payment Iframe Modal ───── */}
      {modalStep === 'payment' && invoiceUrl && (
        <div
          ref={modalRef}
          className="relative z-10 w-full max-w-2xl h-[85vh] bg-[#0d0a14] border border-white/10 rounded-3xl shadow-2xl shadow-primary/10 animate-[slideUp_300ms_ease-out] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center">
                <ShieldCheck size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="text-white text-sm font-bold">Pembayaran Aman</h3>
                <p className="text-white/40 text-xs">Powered by Xendit</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-white/40 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>

          {/* Iframe Loading State */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0d0a14] z-10 rounded-3xl">
              <div className="flex flex-col items-center gap-4">
                <Loader2 size={32} className="text-primary animate-spin" />
                <p className="text-white/50 text-sm font-medium">Memuat halaman pembayaran...</p>
              </div>
            </div>
          )}

          {/* Xendit Invoice Iframe */}
          <iframe
            src={invoiceUrl}
            className="w-full flex-1 border-0 bg-white rounded-b-3xl"
            onLoad={() => setIframeLoaded(true)}
            allow="payment"
            title="Xendit Payment"
          />
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );

  return (
    <>
      <button
        className={`${baseStyles} ${sizeStyles} ${className}`}
        onClick={handleOpenForm}
      >
        <CreditCard size={18} className="mr-2 transition-transform group-hover:scale-110" />
        Beli Sekarang
      </button>

      {/* Render modal directly in document.body to break free of containing card contexts */}
      {modalStep !== 'closed' && isMounted && createPortal(modalContent, document.body)}
    </>
  );
}